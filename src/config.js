const config = {
    STRIPE_KEY: "pk_test_51IOu0kEP7WQP04qmtkFc4BXVucdw28QpPabrxE3mKfH49NzcrdMccuetgmDBBdiF7",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-1",
        BUCKET: " notes-serverlessapp",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://4bwnxa9ad9.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "eu-west-3",
        USER_POOL_ID: "eu-west-3_2RVZszMae",
        APP_CLIENT_ID: "514qec6vl5l8ngdjtfn7389hm2",
        IDENTITY_POOL_ID: "eu-west-3:3a655122-637f-4cce-bc3f-f40801834ee1",
    },
};

export default config;
