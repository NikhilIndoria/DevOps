Blue-Green Deployment of Swiggy-Clone on AWS ECS with AWS Code Pipeline

1. Source Stage: Connect CodePipeline to source code repository (e.g., GitHub). Trigger the pipeline when changes are detected in the repository.

2. Build Stage: Use AWS CodeBuild to build Swiggy-clone Docker image from the source code. Run necessary tests during this stage.

3. Deploy Stage: Configure AWS CodeDeploy for ECS to manage the deployment of application to ECS clusters. Here’s where Blue-Green deployment strategy comes into play:

A. Define two ECS services: Blue and Green.
B. Use CodeDeploy to deploy the new version of Swiggy-clone application to the Green service.
C. After deployment, automate the ALB routing to gradually shift traffic from the Blue service to the Green service based on predefined health checks.
D. Monitor the deployment process and rollback automatically if issues occur during the transition.

Production deployment requirements

- Configure CodeBuild with a Linux standard image that provides Node.js 22 and Docker, and enable privileged mode for Docker builds.
- Configure the CodeBuild role to read the three Docker registry parameters and describe the active `swiggy` ECS task definition in `ap-south-1`.
- Configure CodeDeploy for ECS blue/green deployments and grant its service role permission to register the task definition and pass its task and execution roles.
- Keep the ECS task definition container named `swiggy` with container port `3000`; the pipeline copies the latest active `swiggy` task definition, replaces its image with the immutable build-number tag, and publishes it with `appspec.yaml`.
- Set the load balancer target group's health check path to `/health` and configure the CodeDeploy deployment group with the production listener and both target groups.
