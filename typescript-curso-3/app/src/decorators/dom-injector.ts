export function domInjector(seletor: string){
    return function(target:any, propertykey: string){
        const getter = function(){
            const elemento = document.querySelector(seletor);
            return elemento;
        }
        
        Object.defineProperty(
            target,
            propertykey,
            { get: getter }
        );
    }
}
