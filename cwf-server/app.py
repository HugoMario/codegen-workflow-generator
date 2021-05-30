from flask import Flask, request
import chevron

app = Flask(__name__)


@app.route('/')
def hello_world():
    print("" + request.args.get(""))
    return 'Hello World!'


if __name__ == '__main__':
    app.run()
