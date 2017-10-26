using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace Models.Request
{
    public class Request
    {
        public async Task<string> Send(string url)
        {
            HttpClient client = new HttpClient();

            HttpResponseMessage response = await client.GetAsync(url);
            HttpContent content = response.Content;

            return await content.ReadAsStringAsync();
        }

        public Request()
        {
        }
    }
}