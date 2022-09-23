using DAWA_Api_Proyecto.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace DAWA_Api_Proyecto.Controllers
{
    public class TaskMiValor<TValue>
    {
        public static async Task<ActionResult<IEnumerable<TValue>>> Valor(System.Collections.Generic.IEnumerable<TValue> lista, ControllerBase controllerBase)
        {
            System.Collections.Generic.IEnumerable<TValue> l;
            if (lista == null)
            {
                l = new List<TValue>();
            }
            else
            {
                l = lista;
            }
            var task = new Task<ActionResult<IEnumerable<TValue>>>(() =>
            {
                System.Collections.Generic.IEnumerable<TValue> l3 = l;
                //l3.Append(new Item_ropa(20, "_AA", 20, 20, "_image", 20, "_veinte", 20, "_detalle"));
                if (l3 != null)
                {
                    ActionResult<IEnumerable<TValue>> ar = new ActionResult<IEnumerable<TValue>>(l3);
                    return ar;
                }
                else
                {
                    return controllerBase.NoContent();
                }
            });
            task.Start();
            ActionResult<IEnumerable<TValue>> result = await task;
            return result;
        }
        public delegate ActionResult<IEnumerable<TValue>> ActionFunc(int x, int y);
        public static async Task<ActionResult<IEnumerable<TValue>>> Valor(ActionFunc func, ControllerBase controllerBase)
        {
            var task = new Task<ActionResult<IEnumerable<TValue>>>(() =>
            {
                return func(1, 2);
            });
            task.Start();
            ActionResult<IEnumerable<TValue>> result = await task;
            return result;
        }
        /*
        public static async Task<ActionResult<IEnumerable<Item_ropa>>> ValorMio(System.Collections.Generic.IEnumerable<Item_ropa> lista)
        {
            System.Collections.Generic.IEnumerable<Item_ropa> l;
            if (lista == null)
            {
                l = new List<Item_ropa>();
            }
            else
            {
                l = lista;
            }
            var task = new Task<ActionResult<IEnumerable<Item_ropa>>>(() =>
            {
                System.Collections.Generic.IEnumerable<Item_ropa> l3 = l;
                //l3.Append(new Item_ropa(20, "_AA", 20, 20, "_image", 20, "_veinte", 20, "_detalle"));
                if (l3 != null)
                {
                    ActionResult<IEnumerable<Item_ropa>> ar = new ActionResult<IEnumerable<Item_ropa>>(l3);
                    return ar;
                }
                else
                {
                    return NotFound();
                }
            });
            task.Start();
            ActionResult<IEnumerable<Item_ropa>> result = await task;
            return result;
        }*/
    }
}
