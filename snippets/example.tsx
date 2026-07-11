# chat_service.py

import asyncio
from aiogram import Bot, Dispatcher, types
from aiogram.contrib.middlewares.logging import LoggingMiddleware
from aiogram.types import ParseMode
from aiogram.utils import executor

API_TOKEN = 'YOUR_BOT_API_TOKEN'

bot = Bot(token=API_TOKEN)
dp = Dispatcher(bot)
dp.middleware.setup(LoggingMiddleware())

@dp.message_handler(commands=['start', 'help'])
async def send_welcome(message: types.Message):
    await message.reply("Welcome to the Global SNS Chat Service! How can I assist you today?")

@dp.message_handler()
async def echo(message: types.Message):
    await message.answer(f"You said: {message.text}")

if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True)