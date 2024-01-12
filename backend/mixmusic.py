import itertools
import math
import os
import random
import shutil
import time

from midi2audio import FluidSynth
from midiutil import MIDIFile

import percussion
import harmonize

reserved = ""
first_time = True
firstbar = True
lastbar = False
soundtrue = True
highorlow = random.randint(0,1)
musicpiece1 = []
musicpiece2 = []
part1 = []
part2 = []


chordI = [["C-2","E-2","G-2"]]
chordII = [["D-2","F-2","A-2"]]
chordIII = [["E-2","G-2","B-2"]]
chordIV = [["F-2","A-2","C-3"]]
chordV = [["G-2","B-2","D-3"]]
chordVI = [["A-2","C-3","E-3"]]
chordV7 = [["G-2","B-2","D-3"]]
chordIi = [["C-3","E-3","G-3"]]
simple_chordI = ["C-2",["E-2","G-2","C-3"]]
simple_chordII = ["D-2",["F-2","A-2","D-3"]]
simple_chordIII = ["E-2",["G-2","B-2","E-3"]]
simple_chordIV = ["F-2",["A-2","C-3","F-3"]]
simple_chordV = ["G-2",["B-2","D-3","G-3"]]
simple_chordVI = ["A-2",["C-3","E-3","A-3"]]
simple_chordV7 = ["G-2",["B-2","D-3","F-3"]]
simple_chordIi = ["C-3",["E-3","G-3","C-4"]]
complex_chordI = [["C-2","E-2","G-2","C-3"],"E-2","G-2","C-3"]
complex_chordII = [["D-2","F-2","A-2","D-3"],"F-2","A-2","D-3"]
complex_chordIII = [["E-2","G-2","B-2","E-3"],"G-2","B-2","E-3"]
complex_chordIV = [["F-2","A-2","C-3","F-3"],"A-2","C-3","F-3"]
complex_chordV = [["G-2","B-2","D-3","G-3"],"B-2","D-3","G-3"]
complex_chordVI = [["A-2","C-3","E-3","A-3"],"C-3","E-3","A-3"]
complex_chordV7 = [["G-2","B-2","D-3","F-3"],"B-2","D-3","F-3"]
complex_chordIi = [["C-3","E-3","G-3","C-4"],"E-3","G-3","C-4"]


left_hand_music = []
right_hand_list = []
right_hand_music = []

TEMPO = 100
VOLUME = 50
piano_id = 1
guitar_id = 25
electricguitar_id = 30
string_id = 48
base_id = 32
brass_id = 61
synth_id = 81
french_horn_id = 60
MuswipeMIDI = MIDIFile(10)
MuswipeMIDI.addTempo(0, 0, TEMPO)
MuswipeMIDI.addTempo(1, 0, TEMPO)
MuswipeMIDI.addTempo(2, 0, TEMPO)
MuswipeMIDI.addTempo(3, 0, TEMPO)
MuswipeMIDI.addTempo(4, 0, TEMPO)
MuswipeMIDI.addTempo(5, 0, TEMPO)
MuswipeMIDI.addTempo(6, 0, TEMPO)
MuswipeMIDI.addTempo(7, 0, TEMPO)
MuswipeMIDI.addTempo(8, 0, TEMPO)
MuswipeMIDI.addTempo(9, 0, TEMPO)

MuswipeMIDI.addProgramChange(0, 0, 0, piano_id)
MuswipeMIDI.addProgramChange(1, 1, 0, guitar_id)
MuswipeMIDI.addProgramChange(2, 2, 0, electricguitar_id)
MuswipeMIDI.addProgramChange(3, 3, 0, string_id)
MuswipeMIDI.addProgramChange(4, 4, 0, base_id)
MuswipeMIDI.addProgramChange(5, 5, 0, brass_id)
MuswipeMIDI.addProgramChange(6, 6, 0, synth_id)
MuswipeMIDI.addProgramChange(7, 7, 0, french_horn_id)
MuswipeMIDI.addProgramChange(8, 8, 0, piano_id)


instrument_to_track = {'piano': 0, 'guitar':1, 'electric guitar':2, 'string': 3, 'base':4, "brass":5, "synth":6, "french horn":7, "left hand": 8}
instrument_to_time = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0}
instrument_to_volume = {0:100, 1:50, 2:50, 3:50, 4:50, 5:50, 6:25, 7:50, 8:50}



NOTES = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B']
OCTAVES = list(range(11))
NOTES_IN_OCTAVE = len(NOTES)

errors = {
    'notes': 'Bad input, please refer this spec-\n'
}


def swap_accidentals(note):
    if note == 'Db':
        return 'C#'
    if note == 'D#':
        return 'Eb'
    if note == 'E#':
        return 'F'
    if note == 'Gb':
        return 'F#'
    if note == 'G#':
        return 'Ab'
    if note == 'A#':
        return 'Bb'
    if note == 'B#':
        return 'C'

    return note


def note_to_number(note: str, octave: int) -> int:
    note = swap_accidentals(note)
    assert note in NOTES, errors['notes']
    assert octave in OCTAVES, errors['notes']

    note = NOTES.index(note)
    note += (NOTES_IN_OCTAVE * (octave + 2))

    assert 0 <= note <= 127, errors['notes']

    return note

def add_note(track, note, duration):
    time = instrument_to_time[track]
    pitch, octave = note.split('-')
    MuswipeMIDI.addNote(track, track, note_to_number(pitch, octave), time, duration, instrument_to_volume[track])
    instrument_to_time[track] += duration

def add_notes(instrument, notes, duration):
    track = instrument_to_track[instrument]
    time = instrument_to_time[track]
    if type(notes) == str:
        pitch, octave = notes.split('-')
        MuswipeMIDI.addNote(track, track, note_to_number(pitch, int(octave)), time, duration, instrument_to_volume[track])
    else:
        for note in notes:
            pitch, octave = note.split('-')
            MuswipeMIDI.addNote(track, track, note_to_number(pitch, int(octave)), time, duration, instrument_to_volume[track])
    instrument_to_time[track] += duration

def add_rest(instrument, duration):
    track = instrument_to_track[instrument]
    instrument_to_time[track] += duration

def number_to_note(num, octave, is_french_horn=False):
    map = {1:"C", 2:"D", 3:"E", 4:"F", 5:"G", 6:"E", 7:"B"}
    if is_french_horn:
        map = {1:"E", 2:"F", 3:"G", 4:"A", 5:"B", 6:"C", 7:"D"}
    return map[int(num)] + "-" + str(octave)

def addsimplechord(chord):
    for x in chord:
        add_notes("left hand", x, 1)
def addcomplexchord(chord):
    for x in chord:
        add_notes('guitar', x, 1)
        add_notes('guitar', x, 0.5)
        add_notes('guitar', x, 0.25)
        add_notes('guitar', x, 0.25)
def addchord(chord):
    for x in chord:
        add_notes('guitar', x, 2)

def addlefthand(var1,mode,func1=None, instrument=None):
    if mode == "simple":
        for i in var1:
            if i == 1:
                if highorlow == 0:
                    func1(simple_chordI)
                if highorlow == 1:
                    func1(simple_chordIi)
            if i == 2:
                func1(simple_chordII)
            if i == 3:
                func1(simple_chordIII)
            if i == 4:
                func1(simple_chordIV)
            if i == 5:
                func1(simple_chordV)
            if i == 6:
                func1(simple_chordVI)
            if i == 7:
                func1(simple_chordV7)

    if mode == "chordinit":
        for i in var1:
            if i == 1:
                if highorlow == 0:
                    func1(chordI)
                if highorlow == 1:
                    func1(chordIi)
            if i == 2:
                func1(chordII)
            if i == 3:
                func1(chordIII)
            if i == 4:
                func1(chordIV)
            if i == 5:
                func1(chordV)
            if i == 6:
                func1(chordVI)
            if i == 7:
                func1(chordV7)
    if mode == "chordfin":
        for i in var1:
            if i == 1:
                if highorlow == 0:
                    func1(chordI)
                if highorlow == 1:
                    func1(chordIi)
            if i == 2:
                func1(chordII)
            if i == 3:
                func1(chordIII)
            if i == 4:
                func1(chordIV)
            if i == 5:
                func1(chordV)
            if i == 6:
                func1(chordVI)
            if i == 7:
                func1(chordV7)
    if mode == "complex":
        for i in var1:
            if i == 1:
                if highorlow == 0:
                    func1(chordI)
                if highorlow == 1:
                    func1(chordIi)
            if i == 2:
                func1(chordII)
            if i == 3:
                func1(chordIII)
            if i == 4:
                func1(chordIV)
            if i == 5:
                func1(chordV)
            if i == 6:
                func1(chordVI)
            if i == 7:
                func1(chordV7)
    if mode == "basic":
        for i in var1:
            note = number_to_note(i, 2)
            add_notes(instrument,note,2)
    if mode == "basiccomplex":
        for i in var1:
            note = number_to_note(i, 2)
            add_notes(instrument,note,1)
            add_notes(instrument,note,0.5)
            add_notes(instrument,note,0.25)
            add_notes(instrument,note,0.25)
    if mode == "basichigh":
        for i in var1:
            note = number_to_note(i, 3)
            add_notes(instrument,note,2)
    if mode == "basiccomplexhigh":
        for i in var1:
            note = number_to_note(i, 3)
            add_notes(instrument,note,1)
            add_notes(instrument,note,0.5)
            add_notes(instrument,note,0.25)
            add_notes(instrument,note,0.25)
    if mode == "basic2":
        for i in var1:
            note = number_to_note(i, 2, is_french_horn=True)
            add_notes(instrument,note,2)



def transnum(var1,var2):
    global reserved
    for i in var1:
        if i[0] == "C":
            var2.append("1")
            reserved = "1"
        if i[0] == "D":
            var2.append("2")
            reserved = "2"
        if i[0] == "E":
            var2.append("3")
            reserved = "3"
        if i[0] == "F":
            var2.append("4")
            reserved = "4"
        if i[0] == "G":
            var2.append("5")
            reserved = "5"
        if i[0] == "A":
            var2.append("6")
            reserved = "6"
        if i[0] == "B":
            var2.append("7")
            reserved = "7"
        if i[0] == "N":
            var2.append(reserved)
    return var2

def determinelefthand(right_hand_music,down_beat_music,nameoffile='music.mp3',user_path=os.getcwd):
    global musicpiece2,musicpiece1
    global part1,part2
    global first_time
    global soundtrue
    for i in down_beat_music:
        if i[0] is None or i[0] == "None":
            add_rest("left hand", i[1])
        else:
            add_notes("left hand", i[0], i[1])
    for i in right_hand_music:
        if i[2] == "None":
            right_hand_list.append([i[2], i[1]])
            if math.floor(i[0] / 2) == i[0] / 2:
                left_hand_music.append(i[2])
                first_time = False
                if i[1] > 2:
                    if math.floor((i[0] + i[1]) / 2) > math.floor(i[0] / 2):
                        left_hand_music.append(i[2])
            else:
                if i[1] > 2:
                    first_time = False
                    left_hand_music.append(i[2])
                else:
                    if math.floor((i[0] + i[1]) / 2) > math.floor(i[0] / 2) and math.floor((i[0]+i[1])/2) != (i[0]+i[1])/2:
                        first_time = False
                        left_hand_music.append(i[2])
        else:
            right_hand_list.append([i[2], i[1]])
            if math.floor(i[0] / 2) == i[0] / 2:
                left_hand_music.append(i[2])
                first_time = False
                if i[1] > 2:
                    if math.floor((i[0] + i[1]) / 2) > math.floor(i[0] / 2):
                        left_hand_music.append(i[2])
            else:
                if i[1] > 2:
                    first_time = False
                    left_hand_music.append(i[2])
                else:
                    if math.floor((i[0] + i[1]) / 2) > math.floor(i[0] / 2) and math.floor((i[0]+i[1])/2) != (i[0]+i[1])/2:
                        first_time = False
                        left_hand_music.append(i[2])



    for i in range(0,16):
        if i < 9:
            part1.append(left_hand_music[i])
        if 8 <= i < 16:
            part2.append(left_hand_music[i])
    part2.append("C-4")
    musicpiece1 = transnum(part1,musicpiece1)
    musicpiece2 = transnum(part2,musicpiece2)
    for i in range(0, 2):
        if i == 0:
            chords_needed = harmonize.determination(musicpiece1,1)
            del chords_needed[-1]
        if i == 1:
            musicpiece2.insert(0,str(chords_needed[-1]))
            chords_needed2 = harmonize.determination(musicpiece2,2)
            del chords_needed2[-1]
            del chords_needed2[0]
    add_rest('piano', 4)
    add_rest('guitar', 4)
    add_rest('string', 4)
    add_rest('base', 4)
    for i in range(0,9):
        add_rest('electric guitar',4)
        add_rest('brass', 4)
        add_rest('synth', 4)
        add_rest('french horn', 4)

    addlefthand(chords_needed, "chordinit", func1=addchord)
    addlefthand(chords_needed2, "chordinit", func1=addchord)
    addlefthand(chords_needed, "complex", func1= addcomplexchord)
    addlefthand(chords_needed2, "complex", func1= addcomplexchord)
    addlefthand(chords_needed, "simple", func1=addsimplechord)
    addlefthand(chords_needed2, "simple", func1=addsimplechord)
    addlefthand(chords_needed, "simple", func1=addsimplechord)
    addlefthand(chords_needed2, "simple", func1=addsimplechord)
    addlefthand(chords_needed, mode="basic", instrument='string')
    addlefthand(chords_needed2, mode="basic", instrument='string')
    addlefthand(chords_needed, mode="basic", instrument='string')
    addlefthand(chords_needed2, mode="basic", instrument='string')
    addlefthand(chords_needed, mode="basic", instrument='base')
    addlefthand(chords_needed2, mode="basic", instrument='base')
    addlefthand(chords_needed, mode="basiccomplex", instrument='base')
    addlefthand(chords_needed2, mode="basiccomplex", instrument='base')
    addlefthand(chords_needed, mode="basichigh", instrument='brass')
    addlefthand(chords_needed2, mode="basichigh", instrument='brass')
    addlefthand(chords_needed, mode="basiccomplexhigh", instrument='electric guitar')
    addlefthand(chords_needed2,mode="basiccomplexhigh", instrument='electric guitar')
    addlefthand(chords_needed, mode="basic2", instrument='french horn')
    addlefthand(chords_needed2, mode="basic2", instrument="french horn")
    sounditeration = 0.0
    soundtrue = True
    lastnote = 'C-4'
    for i in right_hand_list:
        if i[0] == "None":
            if i[1] != 0:
                add_rest('piano', i[1])
        else:
            add_notes('piano', i[0], i[1])
    for i in right_hand_list:
        if sounditeration % 4 == 0 and sounditeration % 8 != 0:
            soundtrue = False
        elif sounditeration % 4 == 0 and sounditeration % 8 == 0:
            soundtrue = True
        else:
            if i[0] == "None":
                if i[1] != 0:
                    add_rest('piano', i[1])

            else:
                add_notes('piano', i[0], i[1])
            if soundtrue:
                if i[0] == "None":
                    if i[1] != 0:
                        add_rest("synth", i[1])
                else:
                    add_notes("synth", i[0], i[1])
            sounditeration += i[1]
            lastnote = i[0]
            continue
        if soundtrue:
            if i[0] == "None":
                if i[1] != 0:
                    add_rest("synth", i[1])
            else:
                add_notes("synth", i[0], i[1])
        else:
            if i[0] == "None":
                try:
                    if lastnote is None or lastnote == "None":
                        add_rest("synth", 4)
                    else:
                        add_notes("synth", lastnote, 2)
                        add_rest("synth", 2)

                except Exception as e:
                    print(f"Error in synth: {e}")
                    add_rest("synth", 4)
            else:
                add_notes("synth", i[0], 2)
                add_rest("synth", 2)
        if i[0] == "None":
            if i[1] != 0:
                add_rest("piano", i[1])
        else:
            add_notes('piano', i[0], i[1])
        lastnote = i[0]
        sounditeration += i[1]
    add_rest("synth", 4)
    add_rest("left hand", 4)
    add_rest('piano', 4)
    add_rest('guitar', 4)
    add_rest('string', 4)
    add_rest('brass', 4)
    add_notes('base', "C-3", 0.75)
    add_notes('base', "E-3", 0.75)
    add_notes('base', "G-3", 1)
    add_notes('base', "C-4", 1.5)
    add_notes('electric guitar', ["C-3","E-3","G-3"],4)
    add_rest('french horn', 4)
    percussion.dopercussion(MuswipeMIDI, 9)
    time.sleep(1)
    play(nameoffile, user_path)

def play(file_name, user_path):

    path = user_path + "/musicpiece"
    final_path = user_path + "/static"

    if os.path.exists(path):
        shutil.rmtree(path)
    if os.path.exists(final_path):
        shutil.rmtree(final_path)

    os.mkdir(path)
    os.mkdir(final_path)
    
    with open(path + '/guitar.mid', "wb") as output_file:
        MuswipeMIDI.writeFile(output_file)
    FluidSynth('Timbre.sf2').midi_to_audio(path+'/guitar.mid',path+'/' + file_name)

    shutil.copy(path + "/" + file_name,  user_path+"/static/"+ file_name)
    shutil.rmtree(path)

    print("the file name is " + file_name)



