module.exports = (bot) => {
    bot.on('polling_error', (error) => {
        console.error('Polling Error:', error);
        // Kalo error parah, bisa restart polling
        if (error.code === 'EFATAL') {
            console.log('⚠️ FATAL ERROR, RESTARTING POLLING...');
            setTimeout(() => {
                bot.startPolling();
            }, 5000);
        }
    });

    bot.on('error', (error) => {
        console.error('Bot Error:', error);
    });

    process.on('unhandledRejection', (error) => {
        console.error('Unhandled Rejection:', error);
    });
};
