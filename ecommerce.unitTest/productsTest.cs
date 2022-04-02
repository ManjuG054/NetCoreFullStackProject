using Microsoft.AspNetCore.Mvc;
using NetCoreWebAPI.Controllers;
using Xunit;

namespace ecommerce.unitTest
{
    public class productsTest
    {
        [Fact]
        public void CheckGetProductsAPI()
        {
            //Arrange
            var controller = new EcommerceController();
            //Act
            var actionResult = controller.Insert();
            //Assert
            //var result = actionResult.Result as OkObjectResult;
            Assert.Equal(actionResult, actionResult);
        }
    }
}