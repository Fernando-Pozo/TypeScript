export function domInjector(seletor) {
    return function (target, propertykey) {
        const getter = function () {
            const elemento = document.querySelector(seletor);
            return elemento;
        };
        Object.defineProperty(target, propertykey, { get: getter });
    };
}
