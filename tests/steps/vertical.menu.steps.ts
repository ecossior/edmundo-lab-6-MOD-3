import { DataTable, Given, Then, When } from "@cucumber/cucumber";
import { expect } from "chai";
import { verticalMenu } from "../../src/pages/components/vertical-menu.page";
import { driverInstance } from "../../src/core/driver";
import { project } from "../../src/entity/project";
import { addProjectPane } from "../../src/pages/components/add-project.page";
import { CustomWorld } from "../../cucumber.config";

Given('the user hovers the mouse on Projects label on the Vertical Menu', async function () {    
    await verticalMenu.hoverProjectLabel();
});

Given('the user clicks the Add Project Icon on the Vertical Menu', async function () {    
    await verticalMenu.clickAddProject();    
    await driverInstance.Page.waitForTimeout(5000);
});

// Given('the user create a project with data:', async function (this: CustomWorld, table:DataTable) {    
//     const data = table.hashes();    
//     project.setName(data[0].name);
//     project.setColor(data[0].color);
//     project.setFavorite (data[0].favorite);
//     project.setView(data[0].view);    
//     await addProjectPane.createNewProject();
//     this.projectName =  project.getName();
//  });
 
// Then('the user should see the New Project on the Vertical Menu', async function (this: CustomWorld) {
//     const projectName = this.projectName as string; 
//     const [isVisible, elementText] = await verticalMenu.getProjectNameInformation(projectName);    
//     expect(isVisible).true;
//     expect(elementText).equal(projectName);
// });
