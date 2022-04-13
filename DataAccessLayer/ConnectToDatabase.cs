using Nancy.Json;
using Newtonsoft.Json;
using System.Data;
using System.Data.SqlClient;

namespace DataAccessLayer
{
    public class ConnectToDatabase
    {
        // Use this main method to debug this class
        static void Main(string[] args)
        {
            double n = 123.123456789123456F;
            Console.Write("Hello\n");
            Console.Write(n);
            Console.Write(GetProducts());
        }

        public static string AccessDb()
        {
            try
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();
                builder.ConnectionString = @"Server = MANJU-GANGADHAR\SQLEXPRESS; Database = SampleDb; Integrated Security = true;";
                string result = "";

                using (SqlConnection connection = new SqlConnection(builder.ConnectionString))
                {

                    connection.Open();

                    String sql = "SELECT name from TestTable where ID = 1";

                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                //Console.WriteLine("{0}", reader.GetString(0));
                                result = reader.GetString(0);
                            }
                        }
                    }
                }
                return result;
            }
            catch (SqlException e)
            {
                return e.ToString();
            }
        }

        public static string GetProducts()
        {
            try
            {
                List<Product> listProducts = new List<Product>();
                string cs = @"Server = MANJU-GANGADHAR\SQLEXPRESS; Database = SampleDb; Integrated Security = true;";
                using (SqlConnection con = new SqlConnection(cs))
                {
                    SqlCommand cmd = new SqlCommand("SELECT * FROM productsTable", con);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Product product = new Product();
                        product.id = Convert.ToInt32(rdr["productId"]);
                        product.name = rdr["productName"].ToString();
                        product.image = "assets/images/products/" + rdr["productImage"].ToString();
                        product.description = rdr["productDescription"].ToString();
                        product.stockCount = Convert.ToInt32(rdr["productCount"]);
                        product.price = Convert.ToInt32(rdr["productPrice"]);
                        listProducts.Add(product);
                    }
                }
                JavaScriptSerializer js = new JavaScriptSerializer();
                return(js.Serialize(listProducts));
            }
            catch (SqlException e)
            {
                return e.ToString();
            }
        }
    }
}
