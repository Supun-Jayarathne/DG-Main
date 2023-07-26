using Backend.Api.Entities;
using Backend.Api.OtherObjects;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Identity.Seeds
{
    public static class DefaultRoles
    {
        public static async Task SeedAsync(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            //Seed Roles
            //await roleManager.CreateAsync(new IdentityRole(StaticUserRoles.SuperAdmin.ToString()));
            await roleManager.CreateAsync(new IdentityRole(StaticUserRoles.ADMIN.ToString()));
            await roleManager.CreateAsync(new IdentityRole(StaticUserRoles.USER.ToString()));
            await roleManager.CreateAsync(new IdentityRole(StaticUserRoles.OWNER.ToString()));
        }
    }
}
