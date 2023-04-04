class Project {
    private name!: string;
    private color!: string;
    private favorite!: string;
    private view!: string;
  
    constructor() {
     
    }
  
    public getName(): string {
      return this.name;
    }
    public getColor(): string {
        return this.color;
    }
    public getFavorite(): string {
        return this.favorite;
    }
    public getView(): string {
        return this.view;
    }

    public setName(name : string) {
      this.name = name;
    }
    public setColor(color: string){
        this.color = color
    }
    public setFavorite(favorite: string){
        this.favorite= favorite;
    }
    public setView(view:string){
        this.view = view;
    }
  }

  export const project = new Project();