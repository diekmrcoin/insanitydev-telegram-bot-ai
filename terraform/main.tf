variable "environment" {
  type = string
}

module "dynamodb_bot_memory" {
  source                   = "./modules/dynamo_db"
  prefix                   = "insanitydev"
  name                     = "ai-bot-memory"
  environment              = var.environment
  hash_key                 = { name = "partition", type = "S" }
  range_key                = { name = "id", type = "S" }
}

module "lambda_bot" {
  source                         = "./modules/lambda"
  prefix                         = "insanitydev"
  name                           = "ai-bot"
  description                    = "Insanity AI Bot"
  environment                    = var.environment
  permissions                    = []
  handler                        = "lambda.handler"
  function_url                   = true
  reserved_concurrent_executions = 1
  timeout                        = 10
}

# module "api" {
#   source          = "./modules/api_gateway"
#   prefix          = "insanitydev"
#   name            = "ai-bot"
#   description     = "Insanity AI Bot"
#   environment     = var.environment
#   lambda_function = module.lambda_bot
# }
