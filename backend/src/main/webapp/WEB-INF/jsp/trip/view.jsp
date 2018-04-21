<jsp:include page="../header.jsp"></jsp:include>

<div class="contentpanel" id="beats-details-div">
    <!--\\\\\\\ contentpanel start\\\\\\-->
    <div class="pull-left breadcrumb_admin clear_both">
        <div class="pull-left page_title theme_color">
            <h1>Beats</h1>
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
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Beat</label>
                                            <select id="area" name="area" class="form-control">
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <input type="button" value="search" id="search" class="btn btn-primary" style="top: 19px;">
                                        </div>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table class="display table table-bordered table-striped" id="beat-details">
                                        <thead>
                                        <tr>
                                            <th></th>
                                            <th>Beat(Trip Name)</th>
                                            <th>Driver Name</th>
                                            <th>Mobile</th>
                                            <th>Helper Name</th>
                                            <th>Helper Number</th>
                                            <th>Vehicle Number</th>
                                            <th>Status</th>
                                        </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                            <div>
                                <a href="#" class="btn btn-primary" id="show-assign-beats">Assign</a>
                                <a href="#" class="btn btn-primary" id="show-modify-beats">Modify</a>
                            </div>

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
<!--\\\\\\\ content panel end \\\\\\-->
<div style="display: none" id="add-modify-div">
    <!-- Customer Add/Modify Forms-->
    <jsp:include page="forms.jsp"></jsp:include>

</div>
<jsp:include page="../footer.jsp"></jsp:include>

<script src="/js/application/beatassignment.js"></script>

<div id="dialog" title="Basic dialog">
    <span id="total_customers"></span>
    <table class="display table table-bordered table-striped" id="customer-details">
        <thead>
        <tr>
            <th>Name</th>
            <th>Bottles Limit</th>
            <th>Bottles Placed</th>
            <th>Bottles Received</th>
            <th>Amount</th>
            <th>Amount Received</th>
            <th>Comments</th>
            <th>Payment Mode</th>
            <th>Payment Lab</th>
            <th>Status</th>
            <th>Empty Total Bottles</th>
            <th>Total Amount</th>
        </tr>
        </thead>
    </table>
</div>