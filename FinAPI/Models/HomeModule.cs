using Nancy;

namespace FinAPI.Models
{
    public class HomeModule : NancyModule
    {
        public HomeModule()
        {
            Get("/", r => "Nancy running on ASP.NET Core LineZero");
            Get("/{name}", r => "简单的路由模板，路由参数：" + r.name);
            Get("/404", r => HttpStatusCode.NotFound);
        }
    }
}
