
// Factory funtion to create blank project array list
export const blankProjectLoad = () => {
    console.log("called blankProjectLoad module .... creating blank project array now");
    let projectArray = [];
    console.log("Pushing the title name of project to the projectArray....");
    let projectTitle = "Default Project";
    projectArray.push({ projectTitle });
    console.log(projectArray);
    return { projectArray, projectTitle };
}