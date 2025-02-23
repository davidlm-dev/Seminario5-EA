import Route, { IRoute } from '../models/routeModel';

export class RouteService {
  
  async createRoute(data: Partial<IRoute>): Promise<IRoute> {
    const route = new Route(data);
    console.log("Creating route at the service:", route);
    return await route.save();
  }

  async getRoutebyStartPosition(startPosition: string): Promise<IRoute | null> {
    return await Route.findOne({ startPosition });
  }  

  async deleteRoutebyStartPosition(startPosition: number): Promise<IRoute | null> {
    return await Route.findOneAndDelete({ startPosition });
  }

  async updateRoutebyStartPosition(startPosition: number, data: Partial<IRoute>): Promise<IRoute | null> {
    console.log("Updating route at the service:", data, startPosition);
    return await Route.findOneAndUpdate({ startPosition }, data, { new: true });
  }

  async listRoutes(): Promise<IRoute[]> {
    return await Route.find({});
  }
}
