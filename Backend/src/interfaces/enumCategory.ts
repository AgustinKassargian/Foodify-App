// export type categories = {
//     starter : boolean,// = "Starter",0
//     mainDish : boolean,// = "Main Dish",
//     drink : boolean,// = "Drink",
//     dessert : boolean,// = "Dessert",
//     veggie : boolean,// ="Veggie",
//     vegan : boolean,//= "Vegan",
//     pasta : boolean,// = "Pasta",
//     salad : boolean,//= "Salad",
//     meat : boolean,// = "Meat",
//     takeAway : boolean// = "Take Away"
// }


// export interface ICategory{
//     starter : false | true,// = "Starter",0
//     mainDish : false | true,// = "Main Dish",
//     drink : false | true,// = "Drink",
//     dessert : false | true,// = "Dessert",
//     veggie : false | true,// ="Veggie",
//     vegan : false | true,//= "Vegan",
//     pasta : false | true,// = "Pasta",
//     salad : false | true,//= "Salad",
//     meat : false | true,// = "Meat",
//     takeAway : false | true// = "Take Away"
// }

/* 
Categorias

1) Para que las queremos usar?
        *Para definir un plato.
        *Para realizar filtros.

2)Como lo cuplimos?
    Para definir un plato.
        {
            Name: Bife,
            Category: {
                        vegan: false
                        pasta: false
                        carne: true
                }
            Description: Esta re rico.

        }        
3) Como hago un filtro?
        apuntar a las propiedades en true.
        recetas.filter(receta.Category.carne = true)
        recetas = [{Name: Bife, Category { vegan: false, pasta false, carne: true}}]


4) Y si me quiero traer todas las categorias como hago?
        *EL Controlodar haria un ICategory.keys()/ const categories = Object.keys(ICategory)
                                                 / categories = [venga, pasta, carne]
                                                 / res.status(200).json(categories)


5) Y si quiero editar una categoria?
    * Tendriamos que hacer una ruta, que tenga un controlador y el controlador haga lo siguiente.
       ICategory.loquequieraseditar = elvalorqueloquierasdejar
       
       
6) Y si quiero agregar una categoria?
        ICategory.loquequeirasagregar = elvalorpordefecto(false)

7) Y si la quiero eliminar?
        delete ICategory.loquequierasborrar.        

*/