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

@app.route("/session<iid>")
def session(iid):

	return json.dumps(Sessions.session.get_profile_data(iid))

@app.route("/profile_data<profile>")
def profileData():
	return json.dumps(News.news.get_news())

@app.route("/suckcrack")
def suck():
	return json.dumps(News.news.get_news())

app.run()