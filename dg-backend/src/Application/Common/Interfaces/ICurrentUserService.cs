﻿namespace dg_backend.Application.Common.Interfaces;

public interface ICurrentUserService
{
    string? UserId { get; }
}