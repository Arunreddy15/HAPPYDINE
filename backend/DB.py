from pymongo.mongo_client import MongoClient
from dotenv import load_dotenv
import os
load_dotenv()

# Directly use your connection URI
uri = os.getenv("CONNECTIONSTRING")

try:
    client=MongoClient(uri)
    db=client['HappyDine']
    user_collection=db['HD_User']
except Exception as e:print(e)