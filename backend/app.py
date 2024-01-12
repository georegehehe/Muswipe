# coding=utf-8
import json
import os
import uuid

from flask import Flask, render_template, request, make_response, send_from_directory
from flask_cors import CORS, cross_origin

import audio_to_midi_melodia_test
from audio_to_midi_melodia import fill_ui_beats, ui_beats_to_notes, notes_to_ui, audio_to_midi_notes
from audio_to_midi_melodia_test import detach_down_beats

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index_html():
    rst = make_response(render_template('index.html', name='stronger'))
    rst.headers['cache-control'] = 'no-cache, no-store, must-revalidate'
    rst.headers['pragma'] = 'no-cache'

    user_id = create_user_id_if_necessary(request, rst)

    print("Access index page, user_id is %s:" % user_id)

    return rst


# 传统模式
@app.route('/humming', methods=['GET', 'POST'])
@cross_origin()
def humming():
    return {"message": "success"}
#     if request.method == 'POST':
#         f = request.files['audioData']
#         f.save(os.path.join(get_user_cwd(request), 'humming.wav'))
#         notes = audio_to_midi_notes(infile=get_user_cwd(request) + "/humming.wav",
#                                     smooth=0.001, minduration=0.11, speed=100)
#         return json.dumps({"notes": notes_to_ui(notes)})


# 传统模式
@app.route('/mix', methods=['GET', 'POST'])
@cross_origin()
def mix():
    if request.method == 'POST':
        data = request.get_data()
        data2 = json.loads(data, encoding='raw_unicode_escape')
        print("data2 is " + str(data2))
        filled_ui_beats = fill_ui_beats(data2["notes"])

        data = ui_beats_to_notes(filled_ui_beats)

        data_raw = []
        for i in data:
            data_raw.append([i[0], i[1], i[2].encode('raw_unicode_escape')])

        print(data_raw)

        pyPlayCd = os.getcwd()
        py2PlayMusicshell = "%s/venv/bin/python %s/audio_to_midi_melodia.py" % (pyPlayCd, pyPlayCd)

        os.chdir(pyPlayCd)

        print("Calling shell: %s" % (py2PlayMusicshell + " \"%s\"" % data_raw))
        val = os.system(py2PlayMusicshell + " \"%s\" \"%s\"" % (data_raw, get_user_cwd(request)))
        print(val)

        ui_notes = notes_to_ui(data)

        print(ui_notes)

        print(get_user_cwd(request))

        resp = make_response(json.dumps({"notes": notes_to_ui(data), "duration": 41}))

        return resp


# 高级模式
@app.route('/mixAd', methods=['GET', 'POST'])
@cross_origin()
def mix_advanced():
    if request.method == 'POST':
        data = request.get_data()
        data2 = json.loads(data, encoding='raw_unicode_escape')
        print("data 2 is " + str(data2["notes"]))
        detached_ui = detach_down_beats(data2["notes"])
        filled_ui_beats = fill_ui_beats(detached_ui)
        data = ui_beats_to_notes(filled_ui_beats)

        data_raw = []
        for i in data:
            data_raw.append([i[0], i[1], i[2].encode('raw_unicode_escape')])

        print(data_raw)

        pyPlayCd = os.getcwd()
        py2PlayMusicshell = "%s/venv/bin/python %s/audio_to_midi_melodia_test.py" % (pyPlayCd, pyPlayCd)

        os.chdir(pyPlayCd)

        print("Calling shell: %s" % (py2PlayMusicshell + " \"" + str(data_raw) + "\"" + " \"" + str(
            audio_to_midi_melodia_test.downbeatbar) + "\""))
        val = os.system(py2PlayMusicshell + " \"" + str(data_raw) + "\"" + " \"" + str(
            audio_to_midi_melodia_test.downbeatbar) + "\" \"" + get_user_cwd(request) + "\"")
        print(val)

        ui_notes = notes_to_ui(data)

        print(ui_notes)

        print(get_user_cwd(request))

        return json.dumps({"notes": notes_to_ui(data), "duration": 41})


@app.route("/download")
def download():
    pyCd = get_user_cwd(request)

    file_name = "finalversion.wav"
    file_path_name = "%s/static" % pyCd

    print(file_path_name)

    return send_from_directory(directory=file_path_name, path=file_name, as_attachment=True)


@app.route('/static/finalversion.wav', methods=['GET', 'POST'])
def play():
    pyCd = get_user_cwd(request)

    file_name = "finalversion.wav"
    file_path_name = "%s/static" % pyCd

    print(file_path_name)

    return send_from_directory(directory=file_path_name, path=file_name, as_attachment=True)


@app.route('/static/finalversionAd.wav', methods=['GET', 'POST'])
def playAd():
    pyCd = get_user_cwd(request)

    file_name = "finalversionAd.wav"
    file_path_name = "%s/static" % pyCd

    return send_from_directory(directory=file_path_name, path=file_name, as_attachment=True)


@app.route("/downloadAd")
def downloadAd():
    pyCd = get_user_cwd(request)

    file_name = "finalversionAd.wav"

    file_path_name = "%s/static" % pyCd

    return send_from_directory(directory=file_path_name, path=file_name, as_attachment=True)


# 高级模式
@app.route('/hummingAd', methods=['GET', 'POST'])
@cross_origin()
def humming_advanced():
    if request.method == 'POST':
        f = request.files['audioData']
        f.save(os.path.join('static', 'hummingAd.wav'))
        notes = audio_to_midi_notes(infile=os.getcwd() + "/static/hummingAd.wav",
                                    smooth=0.001, minduration=0.11, speed=100)
        return json.dumps({"notes": notes_to_ui(notes)})


def create_user_id_if_necessary(request, rst):
    user_id = request.cookies.get("temp_user_id")  # 获取名字为temp_user_id1 对应cookie的值

    if user_id is None:
        user_id = uuid.uuid1()
        rst.set_cookie("temp_user_id", str(user_id), max_age=3600 * 24 * 30)

    return user_id


def get_user_id(req):
    user_id = req.cookies.get("temp_user_id")  # 获取名字为temp_user_id1 对应cookie的值

    if user_id is None:  # 如果无法从cookie获取, 证明浏览器禁用并阻拦了index保存的cookie, 这时用ip地址替代用户
        addr = req.headers.get('X-Real-IP')
        if addr is None:
            addr = req.remote_addr

        if (addr is None) or (addr == ""):
            user_id = "anonymous"  # 浏览器禁止服务器跟踪远程ip? 这种情况很少, 但预防万一做了健壮性代码.
        else:
            user_id = addr.replace(".", "_")

    return user_id


def get_user_cwd(req):
    base_path = os.getcwd()
    user_id = get_user_id(req)
    user_path = ("" + base_path + "/musicfile/users/%s") % user_id

    if not os.path.exists(user_path):
        os.makedirs(user_path)

    return user_path


if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5000)


