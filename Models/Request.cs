using System;
using System.Net.Http;

namespace Models.Request
{
    public class Request
    {
        public async void GetData()
        {
            //We will make a GET request to a really cool website...

            string baseUrl = "http://mwolfhoffman.com";
            //The 'using' will help to prevent memory leaks.
            //Create a new instance of HttpClient
            HttpClient client = new HttpClient();

            //Setting up the response...

            HttpResponseMessage res = await client.GetAsync(baseUrl);
            HttpContent content = res.Content;
            {
                string data = await content.ReadAsStringAsync();
                if (data != null)
                {
                    Console.WriteLine(data);
                }
            }
        }

        public Request()
        {
        }
    }
}