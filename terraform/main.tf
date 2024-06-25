variable "environment" {
  type = string
}

module "lambda_bot" {
  source       = "./modules/lambda"
  prefix       = "insanitydev"
  name         = "ai-bot"
  description  = "Insanity AI Bot"
  environment  = var.environment
  permissions  = []
  handler      = "lambda.handler"
  function_url = true
}
