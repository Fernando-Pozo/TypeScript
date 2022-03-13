export abstract class View<T>{

    protected elemento: HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    //cria o metodo mais a class filha precisa reescrever o metodo
    abstract template(model: T): string;

}