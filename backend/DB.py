from pymongo.mongo_client import MongoClient

# Directly use your connection URI
uri = "mongodb+srv://arunreddyb15:123456pymongo@pycluster.bbhtx.mongodb.net/?retryWrites=true&w=majority&appName=PYCluster"

try:
    client=MongoClient(uri)
    db=client['HappyDine']
    user_collection=db['HD_User']
except Exception as e:print(e)