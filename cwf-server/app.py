from flask import Flask, jsonify, request, make_response
import chevron

app = Flask(__name__)


@app.route('/', methods=['POST', 'OPTIONS'])
def generate():

    if request.method == "OPTIONS":
        response = make_response()
        add_corss(response)
        return response

    content = request.json

    branches = list()
    if content["masterBranch"]:
        branches.append("master")
    if content["testBranch"]:
        branches.append("test-framework")
    if content["threeBranch"]:
        branches.append("3.0.0")

    content["branch"] = branches

    with open('workflow.mustache', 'r') as template:
        output = chevron.render(template, content)

    data = dict()
    data["output"] = output

    response = jsonify(data)
    add_corss(response)

    return response


def add_corss(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")


if __name__ == '__main__':
    app.run()
