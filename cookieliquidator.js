// ==UserScript==
// @name         CookieLiquidator
// @namespace    CookieLiquidator
// @version      0.1.0
// @description  Cookie Clicker Stock Market Helper
// @author       SynGodiva
// @match        https://orteil.dashnet.org/cookieclicker/
// @match        http://orteil.dashnet.org/cookieclicker/
// @homepageURL  https://github.com/Godiva-Games/cookie-clicker-mods
// @supportURL   https://github.com/Godiva-Games/cookie-clicker-mods
// @updateURL    https://github.com/Godiva-Games/cookie-clicker-mods
// @icon         https://github.com/Godiva-Games/cookie-clicker-mods
// @license      MIT
// @grant        none
// ==/UserScript==

// Run
(async function() {
    'use strict';
    
    // Wait for game to load
    let tries = 0
    let maxTries = 100
    while(!(window.Game && Game.ready))
    {
        if (tries < maxTries)
        {
            console.error('CookieLiquidator couldn\'t load properly!')
            return
        }
        else
        {
            await new Promise(r => setTimeout(r, 500))
        }
        tries++
    }

    // Register mod
    Game.registerMod('CookieLiquidator',
    {
        init:function()
        {
            // Variables
            // -- Options
            //let liquidatorLoopFrequency
            //let liquidatorActivityReportFrequency
            
            // Constants
            // -- Strings
            const LIQUIDATOR_GREETING = 'Becoming exit liquidity in 3..2..1..'
            
            
            // Run
            
            async function startLiquidating()
            {
                if (!Game.Objects['Bank'].minigame)
                {
                    console.log('===$$$=== Stock Market minigame has not initialised yet! Will try again in 500 ms.');
                    await new Promise(r => setTemout(r, 500))
                    return
                }
                else
                {
                    console.log('===$$$=== CookieLiquidator initialised at ' + new Date())
                    console.log('===$$$=== with main options as follows:')
                    //console.log('===$$$=== Logic loop frequency: ' + liquidatorTimeBeautifier(liquidatorLoopFrequency))
                    //console.log('===$$$=== Profit/Loss/Efficiency report frequency: ' + liquidatorTimeBeautifier(liquidatorActivityReportFrequency))
                    console.log('===$$$=== ')
                    Game.Notify(`CookieLiquidator is ready`,LIQUIDATOR_GREETING,[35,33],false)
                    //console.log(stockList.check)
                }
            }
            startLiquidating();
        },
        
        save:function()
        {
        
        },
        
        load:function(str)
        {
        
        },
    });
})()
