using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Backend.Api.OtherObjects;
using Backend.Api.Entities;

namespace Infrastructure.Identity.Seeds
{
    public static class DefaultSuperAdmin
    {
        public static async Task SeedAsync(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            //Seed Default User
            var defaultUser = new ApplicationUser
            {
                UserName = "admin",
                Email = "admin@qa.team",
                FirstName = "Supun",
                LastName = "Jayarathne",
                EmailConfirmed = true,
                PhoneNumberConfirmed = true
            };
            if (userManager.Users.All(u => u.Id != defaultUser.Id))
            {
                var user = await userManager.FindByEmailAsync(defaultUser.Email);
                if (user == null)
                {
                    await userManager.CreateAsync(defaultUser, "Abc@123");
                    await userManager.AddToRoleAsync(defaultUser, StaticUserRoles.OWNER.ToString());
                    await userManager.AddToRoleAsync(defaultUser, StaticUserRoles.USER.ToString());
                    await userManager.AddToRoleAsync(defaultUser, StaticUserRoles.ADMIN.ToString());
                    //await userManager.AddToRoleAsync(defaultUser, StaticUserRoles.SuperAdmin.ToString());
                }

            }
        }
    }
}
