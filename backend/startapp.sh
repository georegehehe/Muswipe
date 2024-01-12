nohup ./venv/bin/gunicorn -w 5 -b 127.0.0.1:5000 app:app > app.log 2>&1 &
