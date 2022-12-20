import json, random, string

class Suckcrack:
	def __init__(self):
		self.matches = {}

		#self.load_matches()

	def getUniqueMatchId(self, length=6):
		while True:
			iid = "".join(random.choice(string.ascii_letters) for _ in range(length))
			if not iid in self.matches.keys():
				return iid

	def add_match(self, name, description, start=False, end=False, link=False, status="soon"):
		self.matches

	def load_news(self):
		self.matches = json.loads(open("Content/Suckcrack.json", "r").read())

	def get_news(self):
		return self.matches


suck = Suckcrack()

print(suck.getUniqueMatchId())