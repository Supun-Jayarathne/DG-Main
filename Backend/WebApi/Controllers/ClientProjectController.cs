using Application.Features.ClientProjects.Commands.CreateClientProject;
using Application.Features.ClientProjects.Commands.UpdateClientProject;
using Application.Features.ClientProjects.Queries.GetAllClientProjects;
using Backend.Api.OtherObjects;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [ApiController]
    [Authorize]
    [Route("[controller]")]
    public class ClientProjectController : Controller
    {
        private readonly IMediator _mediator;
        public ClientProjectController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        [Authorize(Roles = StaticUserRoles.USER)]
        public async Task<IActionResult> GetAsync()
        {
            var response = await _mediator.Send(new GetAllClientProjectsRequest());
            return Ok(response);
        }

        [HttpPost]
        [Authorize(Roles = StaticUserRoles.USER)]
        public async Task<IActionResult> PostAsync(CreateClientProjectRequest payload)
        {
            var newlyCreateItemId = await _mediator.Send(payload);
            return Ok(newlyCreateItemId);
        }

        [HttpPut]
        [Authorize(Roles = StaticUserRoles.USER)]
        public async Task<IActionResult> PutAsync(UpdateClientProjectRequest payload)
        {
            var updatedItemId = await _mediator.Send(payload);
            return Ok(updatedItemId);
        }
    }
}
