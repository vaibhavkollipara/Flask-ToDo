import requests

 def todos():
    url = 'http://127.0.0.1:8000/tasks/'
    headers = {}
    try:
        response = requests.get(url=url, headers=headers)
        if response.status_code != 200:
            print("Problem viewing details")
        print(response.json())
    except:
        print("Problem connecting to server")
        
        
def get_todo(id):
    url = 'http://127.0.0.1:8000/tasks/{}'.format(id)
    headers = {}
    try:
        response = requests.get(url=url, headers=headers)
        if response.status_code != 200:
            print("Problem viewing details")
        print(response.json())
    except:
        print("Problem connecting to server")
        
def delete_todo(id):
    url = 'http://127.0.0.1:8000/tasks/{}'.format(id)
    headers = {}
    try:
        response = requests.delete(url=url, headers=headers)
        if response.status_code != 204:
            print("Problem deleting details")
        print(response.json())
    except:
        print("Problem connecting to server")
        

def create_todo():
    url = 'http://127.0.0.1:8000/tasks/'
    headers = {}
    title = str(raw_input('Enter Title'))
    description = str(raw_input('Enter Description'))
    data = {'title':title,'description':description}
    try:
        response = requests.post(url=url, headers=headers,data=data)
        if response.status_code != 200:
            print("Problem viewing details")
        print(response.json())
    except:
        print("Problem connecting to server")
        

def update_todo(id):
    url = 'http://127.0.0.1:8000/tasks/{}'.format(id)
    headers = {}
    title = str(raw_input('Enter Title'))
    description = str(raw_input('Enter Description'))
    done = str(raw_input('Enter Boolean Value'))
    data = {'title':title,'description':description,done=done}
    try:
        response = requests.get(url=url, headers=headers,data=data)
        if response.status_code != 200:
            print("Problem viewing details")
        print(response.json())
    except:
        print("Problem connecting to server")