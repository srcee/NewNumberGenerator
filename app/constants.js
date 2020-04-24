genApp.constant('detailsViewsConstant', {
    byDefault: {
        name: 'byTimeOfGeneration',
        info: 'Sorted by time of generation.'
    },
    byTimeOfGeneration: {
        name: 'byTimeOfGeneration',
        info: 'Sorted by time of generation.'
    },
    byValueAsc: {
        name: 'byValueAsc',
        info: 'Sorted by value in ascending order.'
    },
    random: {
        name: 'random',
        info: 'Random position on the screen.'
    },
    byPeriod: {
        name: 'byPeriod',
        info: 'Numbers generated in a given time period.'
    }
});

genApp.constant('eventsConstant', {
    numberCreated: 'numberCreated',
    isWorkingChanged: 'isWorkingChanged',
    onDialogShown: 'onDialogShown'
});

genApp.constant('nameOfDataInLSConstant', {
    genAppGeneratorsStorage: 'genAppGeneratorsStorage',
});

genApp.constant('dialogWindowMessagesConstant', {
    delete: {
        generator: {
            containerName: 'DELETE GENERATOR CONFIRMATION',
            headerMessage: 'Are you sure you want to delete this generator?'
        },
        number: {
            containerName: 'DELETE NUMBER CONFIRMATION',
            headerMessage: 'Are you sure you want to delete this number?'
        }
    },
    edit: {
        inputError: {
            containerName: 'ERROR: Input is not valid!',
            headerMessage: 'Your input is different than expected. Please try again.'
        }
    }
});