const services = () => 
{
    const adminService = () => 
    {
        return "https://localhost:7160/api/admin/";
    }

    const publicService = () => 
    {
        return "https://localhost:7160/api/";
    }

    return {adminService , publicService}

}

export default services;