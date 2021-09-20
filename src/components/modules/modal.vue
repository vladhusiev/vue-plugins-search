<template>
    <div class="modal fade" id="modalDetails" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalDetailsTitle">
                        Package Info
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ul class="info-list">
                        <li>
                            <strong>Rank: </strong>
                            <slot name="rank"></slot>
                        </li>
                        <li>
                            <strong>Total: </strong>
                            <slot name="total"></slot>
                        </li>
                        <li>
                            <strong>Versions: </strong>
                            <slot name="versions"></slot>
                        </li>
                        <li>
                            <strong>File: </strong>
                            <slot name="files"></slot>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .info-list {
        list-style: none;
    }
    .info-list li {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 10px;
    }
    .info-list li strong {
        margin-right: 10px;
        min-width: 70px;
        display: block;
    }
</style>