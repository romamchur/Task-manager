function historyMessage() {
                    var message = document.getElementById("historyInput").value
                    var h = document.getElementById("history")
                    var myP = document.createElement("p");
                    h.appendChild(myP);
                    myP.innerHTML = Date() + ":" + "You said:" + message;
                }
                function openHistory() {
                    document.getElementById("history").style.display = "block";
                    //  document.getElementById("historyButton").style.display="none";
                    //    document.getElementById("historyButton2").style.display="block";

                }
                function closeHistory() {
                    document.getElementById("history").style.display = "none";
                    //     document.getElementById("historyButton").style.display="block";
                    //      document.getElementById("historyButton2").style.display="none";
                }
                var x = 0;
                document.getElementById("demo").innerHTML = x + " " + "points"
                // Get the modal
                var modal = document.getElementById('myModal');

                // Get the button that opens the modal
                var btn = document.getElementById("myScale");

                // Get the <span> element that closes the modal
                var span = document.getElementsByClassName("close")[0];

                // When the user clicks on the button, open the modal 
                btn.onclick = function () {
                    modal.style.display = "block";
                }

                // When the user clicks on <span> (x), close the modal
                span.onclick = function () {
                    modal.style.display = "none";
                }

                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
                //nUMBER 2 
                var h;
                var myP;
                var myLi;
                var points;
                var nameOfTask;
                var i ;
                var arrayLi = [];
                i=-1;
                
                function deleteLi() {
                    arrayLi[i].remove();
                    i=i-1;
                    var h = document.getElementById("history")
                    var myP = document.createElement("p");
                    h.appendChild(myP);
                    nameOfTask = document.getElementById("inputCreateTaskName").value;
                    myP.innerHTML = Date() + ":" + "remove task" + "(" + nameOfTask + ")";
                }
                function completeTask() {
                    x = Number(x) + Number(points);
                    arrayLi[i].remove();
                    i=i-1;
                    document.getElementById("demo").innerHTML = x + " " + "points"
                    alert("Your reward" + points + "points");
                    h = document.getElementById("history")
                    myP = document.createElement("p");
                    h.appendChild(myP);
                    nameOfTask = document.getElementById("inputCreateTaskName").value;
                    myP.innerHTML = Date() + ":" + "comlete Task" + "(" + nameOfTask + ")";
                }
                function failedTask() {
                    x = Number(x) - Number(points);
                    arrayLi[i].remove();
                    i=i-1;
                    document.getElementById("demo").innerHTML = x + " " + "points"
                    alert("Your fine" + points + "points");
                    h = document.getElementById("history")
                    myP = document.createElement("p");
                    h.appendChild(myP);
                    nameOfTask = document.getElementById("inputCreateTaskName").value;
                    myP.innerHTML = Date() + ":" + "failed task" + "(" + nameOfTask + ")";
                }
                function makeUl() {

                    i++;
                    nameOfTask = document.getElementById("inputCreateTaskName").value;
                    points = document.getElementById("inputCreateTaskPoints").value;
                    myLi = document.createElement("li");
                    arrayLi[i]=myLi;
                    myLi.innerHTML = nameOfTask + "                 " + points + "points";
                    myLi.style.margin = "35px";
                    mainList.appendChild(myLi);
                    var removeButton = document.createElement("button");
                    myLi.appendChild(removeButton);
                    removeButton.innerHTML = "Remove task";
                    removeButton.onclick = deleteLi;
                    removeButton.classList.add("btn-success")
                    removeButton.style.position = "absolute";
                    removeButton.style.left = removeButton.style.left + "780" + "px";
                    var completeButton = document.createElement("button");
                    myLi.appendChild(completeButton);
                    completeButton.innerHTML = "I completed the task";
                    completeButton.style.position = "absolute";
                    completeButton.style.height = "50px";
                    completeButton.style.width = "100px";
                    completeButton.style.left = completeButton.style.left + "880" + "px";
                    completeButton.onclick = completeTask;
                    completeButton.classList.add("btn-success")
                    var failedButton = document.createElement("button");
                    myLi.appendChild(failedButton);
                    failedButton.innerHTML = "I failed the task"
                    failedButton.style.position = "absolute";
                    failedButton.style.height = "50px";
                    failedButton.style.width = "150px";
                    failedButton.onclick = failedTask;
                    failedButton.style.left = failedButton.style.left + "1020" + "px";
                    failedButton.classList.add("btn-success")
                    modalCreateTask.style.display = "none";
                }           // Get the modal
                var modalCreateTask = document.getElementById('modalCreateTask');

                // Get the button that opens the modal
                var btnCreateTask = document.getElementById("createTask");

                // Get the <span> element that closes the modal
                var spanCreateTask = document.getElementsByClassName("closeCreateTask")[0];

                // When the user clicks on the button, open the modal 
                btnCreateTask.onclick = function () {
                    modalCreateTask.style.display = "block";
                }

                // When the user clicks on <span> (x), close the modal
                spanCreateTask.onclick = function () {
                    modalCreateTask.style.display = "none";
                }

                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modalCreateTask.style.display = "none";
                    }
                }
                //Number 3
                var optionsModal = document.getElementById('optionsModal');

                // Get the button that opens the modal
                var optionsButton = document.getElementById("options");

                // Get the <span> element that closes the modal
                var optionsSpan = document.getElementsByClassName("optionsClose")[0];

                // When the user clicks on the button, open the modal 
                optionsButton.onclick = function () {
                    optionsModal.style.display = "block";
                }

                // When the user clicks on <span> (x), close the modal
                optionsSpan.onclick = function () {
                    optionsModal.style.display = "none";
                }