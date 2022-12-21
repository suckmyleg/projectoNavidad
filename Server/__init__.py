from flask import Flask
import json

app = Flask(__name__)

import News
import Clips
import Profiles
import Sessions
import Suckcrack

@app.route("/news_available")
def news_available():
	return json.dumps(News.news.get_news())

@app.route("/sign<nickname>")
def sign(nickname):
	key = Profiles.prof.add_profile(nickname)
	return json.dumps({"key":key})

@app.route("/log<nickname>|<key>")
def login(nickname, key):
	profile_data = Profiles.prof.get_profile(nickname, key)
	iid = False
	if profile_data:
		iid = Sessions.session.add_session({"nickname":profile_data["nickname"],
			"key":profile_data["key"]})
	return json.dumps({"sessionId":iid})

@app.route("/session<iid>")
def session(iid):
	data = Sessions.session.get_profile_data(iid)

	if data == False:
		return json.dumps(False)
	return json.dumps(Profiles.prof.get_profile(data["nickname"], data["key"]))

@app.route("/profile_data<profile>")
def profileData():
	return json.dumps(News.news.get_news())

@app.route("/suckcrack")
def suck():
	return json.dumps(News.news.get_news())

app.run(host='192.168.1.104', port='8080')