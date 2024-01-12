ps -ef |grep -w './venv/bin/gunicorn' |grep -v 'grep' |awk '{print $2}'|xargs kill -9
