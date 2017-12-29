using System.Net.Http;
using System.Threading.Tasks;

namespace Models.Request
{
    public class Request
    {
        public async Task<string> Send(string url)
        {
            var client = new HttpClient();

            var response = await client.GetAsync(url);
            var content = response.Content;

            return await content.ReadAsStringAsync();
        }
    }
}