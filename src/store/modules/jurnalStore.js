import { defineStore } from 'pinia'
import axios from 'axios'

export const useJurnalStores = defineStore('jurnalStore', {
    state: () => ({
        dataList: [],
        overlay: '',
        apiUrl: import.meta.env.VITE_APP_NOCO_DB,
        xcToken: import.meta.env.VITE_APP_XC_TOKEN,
        limit: 10,
        offset: 0,
        search: '',
        sort:'',
        translate: false,
        pageInfo: [],
        loading: false,
    }),
    actions: {
        toggleOverlay() {
            this.overlay = !this.overlay
        },
        toggleLoadingTrue() {
            this.loading = true
        },
        toggleLoadingFalse() {
            this.loading = false
        },
        async setPage(value) {
            this.limit = parseInt(value)  // Ensure limit is an integer
            this.offset = 0  // Reset offset when limit is changed
            await this.fetchData()
        },

    async viewAbstrak(id, qty) {
    try {
        const response = await axios.patch(this.apiUrl + `records`, {
        
                Id: id,
                jumlah_abstrak: qty + 1
            
        }, {
            headers: {
                'xc-token': this.xcToken
            }
        })

        if (response) {
            await this.fetchData();
        }
    } catch (e) {
        alert(e.message);
    }
},
    async viewDownload(id, qty) {
        try {
            const response = await axios.patch(this.apiUrl + `records`, {
            
                    Id: id,
                    jumlah_download: qty + 1
                
            }, {
                headers: {
                    'xc-token': this.xcToken
                }
            })

            if (response) {
                await this.fetchData();
            }
        } catch (e) {
            alert(e.message);
        }
    },
    async nextPage() {
        try {
            this.offset += this.limit  // Increase offset by limit

            if(this.pageInfo.isLastPage === true) {
                alert('ini sudah halaman terakhir')
            }else{
            const response = await axios.get(this.apiUrl + `records?limit=${this.limit}&offset=${this.offset}`, {
                headers: {
                    'xc-token': this.xcToken
                }
            })
            this.dataList = response.data.list
            this.pageInfo = response.data.pageInfo

            }
        
        } catch (e) {
            alert(e.message)
        }
    },
    async prevPage() {
        try {
            this.offset -= this.limit  // Increase offset by limit

            if(this.pageInfo.isFirstPage === true) {
                alert('ini sudah halaman pertama')
            }else{
            const response = await axios.get(this.apiUrl + `records?limit=${this.limit}&offset=${this.offset}`, {
                headers: {
                    'xc-token': this.xcToken
                }
            })
            this.dataList = response.data.list
            this.pageInfo = response.data.pageInfo

            }
        
        } catch (e) {
            alert(e.message)
        }
    },
    async searchData(value) {
        this.loading = true;
        try {
            const response = await axios.get(this.apiUrl + `records?limit=${568}&shuffle=0&offset=${0}`, {
                headers: {
                    'xc-token': this.xcToken
                }
            });

            // Create a regex to match the exact word
            const regex = new RegExp(`\\b${value}\\b`, 'i');  // '\b' for word boundary, 'i' for case-insensitive
            const filteredList = response.data.list.filter(record => regex.test(record['Judul Indonesia']));
            
            console.log(filteredList);
            // Select only the first matching record
            this.dataList = filteredList;
            
            this.pageInfo = response.data.pageInfo;
        } catch (e) {
            alert(e.message);
        } finally {
            this.loading = false;
        }
    },
    async sortData(value) {
        try {
            let response;
            if (Number.isInteger(Number(value))) {
                console.log('ini number');
                response = await axios.get(`${this.apiUrl}records?where=where(Tahun,eq,${value})&limit=${this.limit}&offset=${this.offset}`, {
                    headers: {
                        'xc-token': this.xcToken
                    }
                });
            } else{
                response = await axios.get(`${this.apiUrl}records?where=where(Akreditasi,like,${value})&limit=${this.limit}&offset=${this.offset}`, {
                    headers: {
                        'xc-token': this.xcToken
                    }
                });
            }
            
            this.dataList = response.data.list;
            this.pageInfo = response.data.pageInfo;
        } catch (error) {
            console.error(error);
            alert(error.message); // Alert the error message
        }
    },
    async fetchData() {
        try {
            const response = await axios.get(this.apiUrl + `records?limit=${this.limit}&offset=${this.offset}`, {
                headers: {
                    'xc-token': this.xcToken
                }
            })
            this.dataList = response.data.list
            this.pageInfo = response.data.pageInfo
        } catch (error) {
            alert(error.message)
        }
    },
    toggleTranslate() {
        this.translate = !this.translate
    },
    },
    getters: {
        isOverlayActive() {
            return this.overlay
        },
        isLoading() {
            return this.loading
        },
        getLimit() {
            return this.limit
        },
        getDataList() {
            return this.dataList
        },
        getPageInfo() {
            return this.pageInfo
        },
        getSort(){
            return this.sort
        }
    },
    persist: true,
})
