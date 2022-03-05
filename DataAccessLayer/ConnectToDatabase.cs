using System;
using System.Data.SqlClient;

namespace DataAccessLayer
{
    public class ConnectToDatabase
    {
        static void Main(string[] args)
        {

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
    }
}
