import json, random, string

class Suckcrack:
	def __init__(self):
		self.profiles = {}

		self.load_profiles()

	def getUniqueMatchId(self, length=6):
		while True:
			iid = "".join(random.choice(string.ascii_letters) for _ in range(length))
			if not iid in self.profiles.keys():
				return iid

	def add_profile(self, name):
		self.profiles[]

	def save_sessions(self):
		open("Content/Profiles.json", "w").write(json.dumps(self.profiles))

	def load_sessions(self):
		try:
			self.profiles = json.loads(open("Content/Profiles.json", "r").read())
		except:
			self.save_profiles()

	def get_profile(self, name, key):
		try:
			if self.profiles[name]["key"] == key:
				return self.profiles[name]
		except:
			pass

		return False


suck = Suckcrack()

print(suck.getUniqueMatchId())