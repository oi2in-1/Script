#import subprocess
#subprocess.run(["curl ${https://docs.google.com/spreadsheets/d/1UrtSEhtl8MrU1VEZTZ6I19VRSdCiAUPgrtur9lFF1qE/export/format=xlsx}"])
import requests
import os

@app.route('/your_flask_funtion') 

def get_ses():
    os.chdir('C:/Users/newsy/tryjango/project1/BulkPDF/BulkPDF/')
    dir = os.getcwd()
    print(dir)

    url = 'https://docs.google.com/spreadsheets/d/1UrtSEhtl8MrU1VEZTZ6I19VRSdCiAUPgrtur9lFF1qE/export/format=xlsx'
    r = requests.get(url, allow_redirects=True)
    open('english-values.xlsx', 'wb').write(r.content)

    os.system('cmd /k "BulkPDFConsole.exe "pps-config.BulkPDF""')
    os.chdir('C:/Users/newsy/tryjango/project1/')
    dir = os.getcwd()
    print(dir)