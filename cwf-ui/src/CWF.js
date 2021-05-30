import React from "react";
import './CWF.css'

function CodegenWorkFlow() {
    let version = "v2";
    let language = "java"
    let branchMasterSelected = false;
    let branch3Selected = false;
    let branchTestFrameworkSelected = false;

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
    return (
        <div id="container">
            <h1>Codegen WorkFlow Generator</h1>
            <form>
                <input type="text" id="job-name" placeholder="Job Name" />
                <input type="text" id="build-command" placeholder="Build Command" />
                <input type="text" id="spec-url" placeholder="Spec URL" />
                <input type="text" id="generation-option" placeholder="Generation Option" />
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
                    <option value="ada">Ada</option>
                    <option value="aspnetcore">AspNet</option>
                    <option value="clojure">Clojure</option>
                    <option value="csharp">Csharp</option>
                    <option value="csharp-dotnet2">Csharp Dotnet</option>
                    <option value="elixir">Elixir</option>
                    <option value="go">Go</option>
                    <option value="go-server">Go Server</option>
                    <option value="java">Java</option>
                    <option value="javascript">Javascript</option>
                    <option value="php">PHP</option>
                    <option value="python">Python</option>
                </select>
                <input type="button" name="numberOfGuests" value="Generate"
                    onChange={handleVersionChange} />

            </form>
        </div>
    );
}

export default CodegenWorkFlow;
