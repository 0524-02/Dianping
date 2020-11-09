import Ajax from '@/ajax/Ajax'

export const reqAllCountryList = () =>{
    return Ajax({
        url:'/countryData'
    })
}