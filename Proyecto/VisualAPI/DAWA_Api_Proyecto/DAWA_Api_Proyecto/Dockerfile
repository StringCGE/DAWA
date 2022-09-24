#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.
#
#FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
#WORKDIR /app
#EXPOSE 2000
#EXPOSE 2010
#
#FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
#WORKDIR /src
#COPY ["DAWA_Api_Proyecto.csproj", ""]
#RUN dotnet restore "DAWA_Api_Proyecto.csproj"
#COPY . .
#WORKDIR "/src/."
#RUN dotnet build "DAWA_Api_Proyecto.csproj" -c Release -o /app/build
#
#FROM build AS publish
#RUN dotnet publish "DAWA_Api_Proyecto.csproj" -c Release -o /app/publish /p:UseAppHost=false
#
#FROM base AS final
#WORKDIR /app
#COPY --from=publish /app/publish .
#ENTRYPOINT ["dotnet", "DAWA_Api_Proyecto.dll"]


#no se puede hacer comentarios al final de linea tio #asi
##See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
#http o https depende de los pintos de acceso configurados en asp
#EXPOSE 2080
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["DAWA_Api_Proyecto/DAWA_Api_Proyecto.csproj", "DAWA_Api_Proyecto/"]
RUN dotnet restore "DAWA_Api_Proyecto/DAWA_Api_Proyecto.csproj"
COPY . .
WORKDIR "/src/DAWA_Api_Proyecto"
RUN dotnet build "DAWA_Api_Proyecto.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "DAWA_Api_Proyecto.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DAWA_Api_Proyecto.dll"]