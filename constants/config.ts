interface ISystem {
  environment: string;
  is_production: boolean;
  enable_admin: boolean
}

const SYSTEM:ISystem = {
  environment: process.env.NODE_ENV,
  is_production: 'production' === process.env.NODE_ENV,
  enable_admin: true,
}

export default SYSTEM