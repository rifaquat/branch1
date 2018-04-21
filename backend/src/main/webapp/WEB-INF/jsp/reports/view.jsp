<jsp:include page="../header.jsp"></jsp:include>

<div class="contentpanel" id="driver-details-div">
    <!--\\\\\\\ contentpanel start\\\\\\-->
    <div class="pull-left breadcrumb_admin clear_both">
        <div class="pull-left page_title theme_color">
            <h1>Driver</h1>

        </div>

    </div>

    <div class="container clear_both padding_fix">
        <!--\\\\\\\ container  start \\\\\\-->

        <div id="main-content">
            <div class="page-content">

                <div class="row">
                    <div class="col-md-12">
                        <div class="block-web">
                            <div class="porlets-content">
                                <div class="table-responsive">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                From Date :- <input placeholder="Select From Date" readonly="readonly" id="from-date" class="form-control">

                                                To Date :- <input placeholder="Select From Date" readonly="readonly" id="to-date" class="form-control">

                                                Beat : <select id="beats" name="beats" class="form-control"></select>

                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <input type="button" value="Generate" id="search" class="btn btn-primary" style="top: 19px;">
                                                    <input type="button" value="Generate By Beat" id="search-by-beats" class="btn btn-primary" style="margin-left: 93px;margin-top: -13px;">
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <%--<div id="chartContainer" style="height: 300px; width: 100%"></div>--%>

                                </div>
                                <!--/table-responsive-->
                            </div>
                            <!--/porlets-content-->
                        </div>
                        <!--/block-web-->
                    </div>
                    <!--/col-md-12-->

                </div>
                <!--/row-->


            </div>
            <!--/page-content end-->
        </div>
        <!--/main-content end-->

    </div>
    <!--\\\\\\\ container  end \\\\\\-->
</div>


<jsp:include page="../footer.jsp"></jsp:include>

<script src="/js/reportcanvas/jquery.canvasjs.min.js"></script>

<script src="/js/application/report.js"></script>

<script type="application/javascript">
    $(document).ready(function () {

    });


</script>