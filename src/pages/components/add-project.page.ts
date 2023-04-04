import { driverInstance } from "../../core/driver";
import { ElementActions } from "../../core/element-actions";
import { MouseAtions } from "../../core/mouse-actions";
import { project } from "../../entity/project";
import { BasePage } from "../base.page";

class AddProject extends BasePage {
    //private project:Project;
    private nameTextField: string = '#edit_project_modal_field_name';
    private addButton: string = '//span[text()="Add"]//parent::button';
    private cancelButton: string = '//span[text()="Cancel"]//parent::button';    
          
    // Extra Points add select the following behavior
    private colorDropdown:string = "//button[@aria-labelledby='edit_project_modal_field_color_label']";
    private favoritesToggle: string = "//div[@class='reactist_switch']";
    private colorItem = (name: string) => `//span[@class="color_dropdown_select__name" and text()="${name}"]`;   
    private optionView = (name: string) => `//div[@class='edit_project_modal__${name}_preview']`;        
    
    constructor(){
        super();
    }

    async selectColor(color: string) {
        await ElementActions.click(this.colorDropdown);
        await ElementActions.click(this.colorItem(color));
    }

    async clickFavoritesToggle() {
        await ElementActions.click(this.favoritesToggle);
    }

    async setProjectName(projectName: string) {
        await ElementActions.setText(this.nameTextField, projectName);
        await driverInstance.Page.waitForTimeout(20000);
    }

    async clickoptionView(name:string) {
        await ElementActions.click(this.optionView(name));
    }

    async click() {
        await ElementActions.click(this.addButton);
    }

    async clickAdd() {
        await ElementActions.click(this.addButton);
    }

    async clickRemove() {
        await ElementActions.click(this.addButton);
    }

    async createNewProject() {

        await addProjectPane.setProjectName(project.getName());                     
        await addProjectPane.selectColor(project.getColor());
        if (project.getView()=="board" || project.getView()=="list") {
            await addProjectPane.clickoptionView(project.getView());    
        }
        if (project.getFavorite()=="checked") {

            await addProjectPane.clickFavoritesToggle();
        }               
        await addProjectPane.clickAdd();
    }
}

export const addProjectPane = new AddProject();