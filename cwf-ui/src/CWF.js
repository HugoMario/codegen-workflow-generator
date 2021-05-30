import React from "react";
import axios from "axios";
import './CWF.css'

function CodegenWorkFlow() {
    let version = "v2";
    let language = "java"
    let branchMasterSelected = false;
    let branch3Selected = false;
    let branchTestFrameworkSelected = false;

    const workflowInputRef = React.createRef();
    const buildCommandInputRef = React.createRef();
    const specInputRef = React.createRef();
    const optionInputRef = React.createRef();
    const textareaRef = React.createRef();

    const handleVersionChange = (event) => {
        version = event.target.value;
    };

    const handleLanguageChange = (event) => {
        language = event.target.value;
    };

    const handleInputClick = (event) => {
        if (event.target.id === "master") {
            if (branchMasterSelected) {
                branchMasterSelected = false
                event.target.className = ""
            } else {
                branchMasterSelected = true
                event.target.className = "clicked"
            }
        }
        if (event.target.id === "test-framework") {
            if (branchTestFrameworkSelected) {
                branchTestFrameworkSelected = false
                event.target.className = ""
            } else {
                branchTestFrameworkSelected = true
                event.target.className = "clicked"
            }
        }
        if (event.target.id === "3.0.0") {
            if (branch3Selected) {
                branch3Selected = false
                event.target.className = ""
            } else {
                branch3Selected = true
                event.target.className = "clicked"
            }
        }

    };

    const handleResponse = (response) => {
        textareaRef.current.value = response.data["output"]
    }

    const handleGenerateClick = (event) => {

        const name = "Test Framework" + version.toUpperCase() + " " + workflowInputRef.current.value;
        let jobName =  workflowInputRef.current.value.toLowerCase() + "-" + version + " sample";
        jobName = jobName.replace(" ", "-")
        const buildCommand =  buildCommandInputRef.current.value;
        const specUrl =  specInputRef.current.value;
        const options =  optionInputRef.current.value;

        const data = {
            "name": name,
            "jobName": jobName,
            "buildCommand": buildCommand,
            "language": language,
            "specUrl": specUrl,
            "options": options,
            "masterBranch": branchMasterSelected,
            "testBranch": branchTestFrameworkSelected,
            "threeBranch": branch3Selected
        }

        axios.post('http://localhost:5000/', data)
                .then(response => handleResponse(response));
    };
    return (
        <div id="container">
            <div id="sub-container-0">
                <h1>Codegen WorkFlow Generator</h1>
                <form>
                    <input type="text" id="workflow-name" ref={workflowInputRef} placeholder="Workflow Name" />
                    <input type="text" id="build-command" ref={buildCommandInputRef} placeholder="Build Command" />
                    <input type="text" id="spec-url" ref={specInputRef} placeholder="Spec URL" />
                    <input type="text" id="generation-option" ref={optionInputRef} placeholder="Generation Option" />
                    <label className="label">Branches</label>
                    <div id="branches">
                        <input type="button" id="master" value="master" onClick={handleInputClick} />
                        <input type="button" id="test-framework" value="test-framework" onClick={handleInputClick} />
                        <input type="button" id="3.0.0" value="3.0.0" onClick={handleInputClick} />
                    </div>

                    <select id="versions" onChange={handleVersionChange}>
                        <option value="v2">V2</option>
                        <option value="v3">V3</option>
                    </select>
                    <select id="languages" onChange={handleLanguageChange}>
                        <option value="android">android</option>
                        <option value="ada">ada</option>
                        <option value="apex">apex</option>
                        <option value="aspnetcore">aspnetcore</option>
                        <option value="clojure">clojure</option>
                        <option value="csharp">csharp</option>
                        <option value="csharp-dotnet2">csharp-dotnet2</option>
                        <option value="elixir">elixir</option>
                        <option value="elm">elm</option>
                        <option value="eiffel">eiffel</option>
                        <option value="erlang-client">erlang-client</option>
                        <option value="erlang-server">erlang-server</option>
                        <option value="go">go</option>
                        <option value="go-server">go-server</option>
                        <option value="groovy">groovy</option>
                        <option value="dynamic-html">dynamic-html</option>
                        <option value="java">java</option>
                        <option value="javascript">javascript</option>
                        <option value="java-vertx">java-vertx</option>
                        <option value="jaxrs-cxf-client">jaxrs-cxf-client</option>
                        <option value="jaxrs-cxf">jaxrs-cxf</option>
                        <option value="inflector">inflector</option>
                        <option value="jaxrs-cxf-cdi">jaxrs-cxf-cdi</option>
                        <option value="jaxrs-spec">jaxrs-spec</option>
                        <option value="jaxrs-jersey">jaxrs-jersey</option>
                        <option value="jaxrs-di">jaxrs-di</option>
                        <option value="jaxrs-resteasy-eap">jaxrs-resteasy-eap</option>
                        <option value="jaxrs-resteasy">jaxrs-resteasy</option>
                        <option value="micronaut">micronaut</option>
                        <option value="spring">spring</option>
                        <option value="nodejs-server">nodejs-server</option>
                        <option value="openapi">openapi</option>
                        <option value="openapi-yaml">openapi-yaml</option>
                        <option value="swagger">swagger</option>
                        <option value="swagger-yaml">swagger-yaml</option>
                        <option value="kotlin-client">kotlin-client</option>
                        <option value="kotlin-server">kotlin-server</option>
                        <option value="php">php</option>
                        <option value="python">python</option>
                        <option value="python-flask">python-flask</option>
                        <option value="ruby">ruby</option>
                        <option value="scala">scala</option>
                        <option value="swift">swift</option>
                        <option value="typescript-angular">typescript-angular</option>
                        <option value="typescript-axios">typescript-axios</option>
                        <option value="typescript-fetch">typescript-fetch</option>
                        <option value="typescript-aurelia">typescript-aurelia</option>
                        <option value="typescript-jquery">typescript-jquery</option>
                        <option value="typescript-node">typescript-node</option>
                    </select>
                    <input type="button" id="button" value="Generate" onClick={handleGenerateClick} />
                </form>
            </div>
            <div id="sub-container-1">
                <h1>Generated Workflow</h1>
                <textarea wrap="soft" ref={textareaRef}></textarea>
            </div>
        </div>
    );
}

export default CodegenWorkFlow;
